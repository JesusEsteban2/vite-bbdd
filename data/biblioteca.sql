-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public."Usuarios"
(
    usuario_id uuid NOT NULL,
    nombre character varying(45),
    PRIMARY KEY (usuario_id)
);

COMMENT ON TABLE public."Usuarios"
    IS 'Usuarios de la biblioteca';

CREATE TABLE IF NOT EXISTS public."Libros"
(
    libro_id uuid NOT NULL,
    titulo character varying(45) NOT NULL,
    PRIMARY KEY (libro_id)
);

CREATE TABLE IF NOT EXISTS public."Autores"
(
    autor_id uuid NOT NULL,
    "Nombre" character varying(45),
    PRIMARY KEY (autor_id)
);

CREATE TABLE IF NOT EXISTS public."Autores_Libros"
(
    "Autores_autor_id" uuid NOT NULL,
    "Libros_libro_id" uuid NOT NULL,
    orden integer,
    PRIMARY KEY ("Autores_autor_id", "Libros_libro_id")
);

ALTER TABLE IF EXISTS public."Autores_Libros"
    ADD FOREIGN KEY ("Autores_autor_id")
    REFERENCES public."Autores" (autor_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Autores_Libros"
    ADD FOREIGN KEY ("Libros_libro_id")
    REFERENCES public."Libros" (libro_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;