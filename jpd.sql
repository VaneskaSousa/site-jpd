CREATE TABLE vol_org (
    Vol_id int NOT NULL,
    Username VARCHAR(32) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password_vol VARCHAR(255) NOT NULL,
    PRIMARY KEY (vol_id)
);

CREATE TABLE tipo_patrocinio (
    Tipo_patrocinio_id int NOT NULL,
    Pat_name VARCHAR(35) NOT NULL,
    Recorrencia BOOLEAN NOT NULL,
    PRIMARY KEY (Tipo_patrocinio_id)
);

CREATE TABLE patrocinadores (
	Patrocinador_id int NOT NULL,
    Username VARCHAR(255) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	Tipo_patrocinio_id INT,
    PRIMARY KEY (patrocinador_id),
    FOREIGN KEY (Tipo_patrocinio_id) REFERENCES tipo_patrocinio(Tipo_patrocinio_id)
);
