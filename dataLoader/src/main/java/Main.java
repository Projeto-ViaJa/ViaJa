import client.S3Provider;
import database.model.dao.DaoFactory;
import database.model.dao.RegistroVooDao;
import entity.RegistroVoo;
import dataLoader.reader.ExcelRegistroVooReader;
import dataLoader.service.RegistroVooService;
import org.slf4j.Logger;
import software.amazon.awssdk.core.sync.ResponseTransformer;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.ListObjectsRequest;
import software.amazon.awssdk.services.s3.model.S3Exception;
import software.amazon.awssdk.services.s3.model.S3Object;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.List;

import logger.AppLogger;

public class Main {

    public static void main(String[] args) {
        String nomeArquivo = null;

        File file = new File("BASE 10 ANOS - EM XLSX.xlsx");


        if (file.exists()) {
            if (file.delete()) {
                AppLogger.info("S3", "Arquivo local encontrado e deletado", "Arquivo: " + file.getName() +
                        " removido antes do download");

            } else {
                System.out.println("Falha ao deletar o arquivo.");
            }
        } else {
            System.out.println("Arquivo não encontrado.");
        }


        //Instanciando o cliente S3 via S3Provider
        S3Client s3Client = new S3Provider().getS3Client();
        String bucketName = "bucketviaja2026";


         //  Fazendo download de arquivos
        try {
        ListObjectsRequest requisicao = ListObjectsRequest.builder()
        .bucket(bucketName)
                    .build();
            List<S3Object> objects = s3Client.listObjects(requisicao).contents();
            for (S3Object object : objects) {
                GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                        .bucket(bucketName)
                        .key(object.key())
                        .build();

                      InputStream inputStream = s3Client.getObject(getObjectRequest, ResponseTransformer.toInputStream());
              Files.copy(inputStream, new File(object.key()).toPath());
              System.out.println("Arquivo baixado: " + object.key());
              nomeArquivo = object.key();
          }
        } catch (IOException | S3Exception e) {
           System.err.println("Erro ao fazer download dos arquivos: " + e.getMessage());
        }


        ExcelRegistroVooReader reader = new ExcelRegistroVooReader();
        RegistroVooService service = new RegistroVooService();

        System.out.println("\n=== TEST: Iniciando tentativa de extrair dados ===");
        List<RegistroVoo> registrosVoo = service.filtrarBrasil(
                reader.extrairRegistros(nomeArquivo)
        );
        System.out.println("\n=== TEST: Finalizado tentativa de extrair dados ===");


        System.out.println("\n=== TEST: Iniciando tentativa de inserir no banco ===");
        RegistroVooDao registroVooDao = DaoFactory.createRegistroVooDao();
        registroVooDao.insert(registrosVoo);
        System.out.println("\n=== TEST: Finalizado a tentativa de inserir no banco ===");

    }
}
