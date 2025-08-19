import { z } from "zod";

export const updateArchivosRespaldoSchema = z.object({
  ctrl_id: z.number({required_error:"'ctrl_id' es requerido",invalid_type_error:"'ctrl_id' debe ser un numero"}).int("'ctrl_id' debe ser un numero entero").gte(0, "'ctrl_id' deber ser mayor o igual a 0"),
  rt_id: z.number({required_error:"'rt_id' es requerido",invalid_type_error:"'rt_id' debe ser un numero"}).int("'rt_id' debe ser un numero entero").gte(0, "'rt_id' deber ser mayor o igual a 0"),
},{required_error:"Es necesario proporcionar un cuerpo en la solicitud HTTP " , invalid_type_error: "El formato del cuerpo de la solicitud HTTP no es válido."});