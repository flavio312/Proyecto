import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';

const TableHeader = () => {
  const styles = StyleSheet.create({
    tableRow: {
      flexDirection: "row",
      backgroundColor: "#e0e0e0",
      borderStyle: "solid",
      borderWidth: 1,
    },
    tableCol: {
      width: "20%",
      borderStyle: "solid",
      borderWidth: 1,
      textAlign: "center",
    },
    text: {
      fontSize: 12,
      fontWeight: "bold",
      margin: 5,
    },
  });

  return (
    <View style={styles.tableRow}>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Código</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Producto</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Precio</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Cantidad</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Subtotal</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.text}>Turno</Text>
      </View>
    </View>
  );
};

export default TableHeader;
