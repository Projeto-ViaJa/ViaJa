package dataLoader.service;

import entity.RegistroVoo;

import java.util.List;

public class RegistroVooService {

    public List<RegistroVoo> filtrarBrasil(List<RegistroVoo> lista) {
        return lista.stream()
                .filter(r -> ehUfBrasil(r.getAeroportoOrigemUf()))
                .filter(r -> ehUfBrasil(r.getAeroportoDestinoUf()))
                .toList();
    }

    private boolean ehUfBrasil(String uf) {
        return uf != null && uf.matches(
                "AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO"
        );
    }
}
