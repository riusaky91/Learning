package lejo.inventarios.repositorio;

import lejo.inventarios.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductoRepositorio extends JpaRepository<Producto, Integer> {



}
