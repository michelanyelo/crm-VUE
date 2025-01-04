import instance from "@/lib/axios";

export default {
  obtenerClientes() {
    return instance.get("/clientes");
  },
  agregarCliente(data) {
    return instance.post("/clientes", data);
  },
}
