import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'black',
    color:'white',
  },
  section: {
    marginLeft: 50,
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