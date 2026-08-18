-- Cobogó bundle-level relational contract.
--
-- This file declares only identities/relationships that are stable semantic
-- authority in the corpus. It is not a second registry and does not duplicate
-- every frontmatter field. okf-parser validates these constraints against the
-- authored Markdown concepts.

CREATE TABLE "consumer" (
    title VARCHAR UNIQUE,
    repository VARCHAR UNIQUE
);

CREATE TABLE "specimen" (
    consumer VARCHAR REFERENCES "consumer"(title)
);

CREATE TABLE "design-decision" (
    consumer VARCHAR REFERENCES "consumer"(title)
);
