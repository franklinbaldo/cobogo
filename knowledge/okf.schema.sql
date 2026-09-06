CREATE TABLE "VisualReference" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    source_url VARCHAR NOT NULL,
    source_kind VARCHAR NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('candidate', 'curated', 'retired')),
    observations VARCHAR[] NOT NULL,
    cautions VARCHAR[]
);

CREATE TABLE "VisualStudy" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    reference_id VARCHAR NOT NULL REFERENCES "VisualReference"(id),
    focus VARCHAR NOT NULL,
    questions VARCHAR[] NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('open', 'synthesized', 'retired'))
);

CREATE TABLE "VisualExperiment" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    study_id VARCHAR NOT NULL REFERENCES "VisualStudy"(id),
    hypothesis VARCHAR NOT NULL,
    medium VARCHAR NOT NULL,
    constraints VARCHAR[] NOT NULL,
    procedure VARCHAR[] NOT NULL,
    success_signals VARCHAR[] NOT NULL,
    failure_signals VARCHAR[] NOT NULL,
    skill_path VARCHAR NOT NULL,
    status VARCHAR NOT NULL CHECK (status IN ('proposed', 'running', 'promising', 'rejected', 'promoted')),
    outcome VARCHAR
);

CREATE TABLE "VisualSpecimen" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    experiment_id VARCHAR NOT NULL REFERENCES "VisualExperiment"(id),
    route VARCHAR NOT NULL,
    artifact_path VARCHAR,
    status VARCHAR NOT NULL CHECK (status IN ('draft', 'published', 'retired')),
    notes VARCHAR[]
);

CREATE TABLE "DesignPrinciple" (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    summary VARCHAR NOT NULL,
    evidence_experiment_ids VARCHAR[] NOT NULL,
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
