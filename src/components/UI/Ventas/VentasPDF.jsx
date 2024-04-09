import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const VentasPDF = ({ ventas, filtro }) => {
  const filteredVentas = ventas.filter(venta =>
    venta.producto.toLowerCase().includes(filtro.toLowerCase())
  );

  const styles = StyleSheet.create({
    page: {
      padding: 10,
    },
    table: {
      display: "table",
      width: "auto",
      borderStyle: "solid",
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      margin: "auto",
      flexDirection: "row",
    },
    tableCol: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    title: {
      fontSize: 24,
      marginBottom: 10,
      textAlign: "center",
    },
    text: {
      fontSize: 10,
      margin: 5,
    },
  });

  return (
    <PDFViewer style={{ width: '80%', height: '70vh',marginLeft:'130px'}}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>Reporte de Ventas</Text>
          <View style={styles.table}>
            <TableHeader />
            {/* Datos de ventas */}
            {filteredVentas.map(venta => (
              <TableRow key={venta.id} venta={venta} />
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default VentasPDF;
