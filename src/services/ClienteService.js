import instance from "@/lib/axios";

export default {
  obtenerClientes() {
    return instance.get("/clientes");
  },
  agregarCliente(data) {
    return instance.post("/clientes", data);
  },
  obtenerCliente(id) {
    return instance.get(`/clientes/${id}`);
  },
  actualizarCliente(id, data) {
    return instance.patch(`/clientes/${id}`, data);
  },
  cambiarEstado(id, data) {
    return instance.patch(`/clientes/${id}`, data);
  }
}
