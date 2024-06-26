import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import { FC } from "react";
import { styles } from "../../GlobalStyles";
import { IFormPDF } from "../../interfaces/IFormPDF";

const DocumentPDF: FC<IFormPDF> = ({ name, picture }) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page} wrap>
          <View style={styles.section}>
            <Text>Title: </Text>
          </View>
          <View style={styles.section}>
            <Text>{name}</Text>
          </View>
          <View style={styles.section}>
            <Text>Picture:</Text>
            {picture && <Image src={picture} style={styles.picture} />}
          </View>
        </Page>
      </Document>
    </>
  );
};

export default DocumentPDF;
