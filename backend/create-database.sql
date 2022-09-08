-- Database: alimentacao_balanceada

-- DROP DATABASE IF EXISTS alimentacao_balanceada;

CREATE DATABASE alimentacao_balanceada
    WITH
    OWNER = caca
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Table: public.account

-- DROP TABLE IF EXISTS public.account;

CREATE TABLE IF NOT EXISTS public.account
(
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    password character varying(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT account_pkey PRIMARY KEY (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.account
    OWNER to caca;

GRANT ALL ON TABLE public.account TO caca;

CREATE TABLE public.image
(
    filename character varying,
    is_it_carbs boolean NOT NULL,
    is_it_prots boolean NOT NULL,
    is_it_fats boolean NOT NULL,
    PRIMARY KEY (filename)
);

ALTER TABLE IF EXISTS public.image
    OWNER to caca;

GRANT ALL ON TABLE public.image TO caca;