import { faBox, faTag, faBoxesPacking, faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cardDataB = [
    { title: "Ventas", to: "/ventas", icon: faTag },
    { title: "Corte de caja por turno", to: "/corte-turno", icon: faBoxesPacking},
    { title: "Corte de caja del dìa", to: "/corte-dia", icon: faBoxArchive}
];
  
export default cardDataB;
  