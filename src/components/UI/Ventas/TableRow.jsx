import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const    TableRow = ({ venta }) => {
  const styles = StyleSheet.create({
    tableRow: {
      flexDirection: "row",
      borderWidth: 1,
    },
    tableCol: {
      width: "20%",
      borderWidth: 1,
      textAlign: "center",
    },
    text: {
      fontSize: 10,
      margin: 5,
    },
  });

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.text}>{venta.codigo}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>{venta.producto}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>{venta.precioVenta}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>{venta.cantidad}</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>{venta.subtotal}</Text>
      </View>
    </View>
  );
};

export default TableRow;
