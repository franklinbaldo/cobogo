CREATE TABLE "RFC" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('proposed', 'accepted', 'superseded', 'rejected')),
    date VARCHAR NOT NULL,
    scope VARCHAR[] NOT NULL
);

CREATE TABLE "VisualReference" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    source_url VARCHAR NOT NULL,
    source_kind VARCHAR NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('candidate', 'curated', 'retired')),
    observations VARCHAR[] NOT NULL,
    cautions VARCHAR[]
);

CREATE TABLE "PracticeBaseline" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    kind VARCHAR NOT NULL CHECK (kind IN ('cobogo_current', 'design_system')),
    source_url VARCHAR,
    source_name VARCHAR NOT NULL,
    observed_surface VARCHAR NOT NULL,
    observed_at VARCHAR NOT NULL,
    strengths VARCHAR[] NOT NULL,
    limitations VARCHAR[] NOT NULL,
    findings VARCHAR[] NOT NULL,
    evidence VARCHAR[] NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('current', 'superseded', 'retired'))
);

CREATE TABLE "VisualStudy" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    reference_id VARCHAR NOT NULL REFERENCES "VisualReference"(id),
    focus VARCHAR NOT NULL,
    questions VARCHAR[] NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('open', 'synthesized', 'retired'))
);

CREATE TABLE "VisualExploration" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    study_id VARCHAR NOT NULL REFERENCES "VisualStudy"(id),
    cobogo_baseline_id VARCHAR REFERENCES "PracticeBaseline"(id),
    practice_baseline_ids VARCHAR[],
    baseline_question VARCHAR,
    direction VARCHAR NOT NULL,
    medium VARCHAR NOT NULL,
    constraints VARCHAR[] NOT NULL,
    procedure VARCHAR[] NOT NULL,
    qualities_to_seek VARCHAR[] NOT NULL,
    tensions_to_watch VARCHAR[] NOT NULL,
    skill_path VARCHAR NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('rough', 'exploring', 'concluded', 'abandoned')),
    result VARCHAR CHECK (result IS NULL OR result IN ('selected', 'rejected', 'inconclusive')),
    result_rationale VARCHAR,
    baseline_comparison VARCHAR,
    canonical_status VARCHAR NOT NULL DEFAULT 'not_evaluated' CHECK (canonical_status IN ('not_evaluated', 'candidate', 'adopted', 'declined')),
    canonical_rationale VARCHAR,
    canonical_targets VARCHAR[],
    reflection VARCHAR
);

CREATE TABLE "VisualSpecimen" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    exploration_id VARCHAR NOT NULL REFERENCES "VisualExploration"(id),
    route VARCHAR NOT NULL,
    artifact_path VARCHAR,
    status VARCHAR NOT NULL CHECK (status IN ('draft', 'published', 'retired')),
    notes VARCHAR[]
);

CREATE TABLE "DesignPrinciple" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    summary VARCHAR NOT NULL,
    evidence_exploration_ids VARCHAR[] NOT NULL,
    maturity VARCHAR NOT NULL CHECK (maturity IN ('opinionated', 'validated', 'stable', 'retired'))
);

CREATE TABLE "SessionType" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR,
    purpose VARCHAR,
    run_spec VARCHAR,
    extends VARCHAR,
    nudges VARCHAR[],
    context_policy VARCHAR,
    access_policy VARCHAR,
    output_policy VARCHAR,
    cadence_policy VARCHAR
);

CREATE TABLE "RunSpec" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR,
    version VARCHAR,
    status VARCHAR,
    required_reading_kinds VARCHAR[],
    required_goal_kinds VARCHAR[],
    required_evidence_kinds VARCHAR[],
    required_check_kinds VARCHAR[],
    skill VARCHAR,
    parent_spec VARCHAR,
    allowed_entry_states VARCHAR[],
    allowed_result_states VARCHAR[],
    completion_notes VARCHAR
);
