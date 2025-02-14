# Entidades

## Alumnos

- alumno_id
- Nombre
- dirección
- teléfono
- email

## Grupos

alumno_id
profesor_id
asignatura_id

## Asignaturas

asignatura_id
Nombre

## Profesores

profesor_id
nombre

## Departamento

profesor_id
director_id
asignatura_id
nombre

## Aula

aula_id
Nombre

# Relaciones

---

## Se matricula {

entidades: alumnos, grupo
relación: id_alumnos, id_grupo
cardinalidad: 1..n --> 1..n
atributos: fecha_matricula, calificación

}

## Se divide {

entidades: asignatura, grupo
relación: id_asignatura, id_grupo
cardinalidad: 1 --> 1..n
atributos:

}

## Imparte {

entidades: profesor, grupo
relación: id_profesor, id_grupo
cardinalidad: 1 --> 1..n
atributos:
}

## Dirige {

entidades: profesor, departamento
relación: id_profesor, id_departamento
cardinalidad: 1 --> 1
atributos:
}

## Enseña en el dpto {

entidades: profesor, departamento
relación: id_profesor, id_departamento
cardinalidad: n --> 1
atributos:
}
