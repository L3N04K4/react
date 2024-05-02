import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'black',
    color:'white',
  },
  section: {
    margin: 5,
    padding: 5,
  },
  picture: {
    width:'150px',
    height:'150px',
    objectFit:'cover'
}
}


);