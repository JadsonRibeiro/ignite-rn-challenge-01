import { StyleSheet } from 'react-native';
import { Colors } from '../../styles/global';

export const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter',
    fontSize: 14,
    backgroundColor: Colors.gray600,
    height: '100%'
  },
  header: {
    height: 173,
    backgroundColor: Colors.gray700,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    padding: 24
  },
  formBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    position: 'relative',
    top: -50
  },
  formBoxInput: {
    marginRight: 4,
  },
  quantityBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: Colors.gray400,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  quantityBoxInfo: {
    flexDirection: 'row'
  },
  quantityBoxLabel: {
    color: Colors.blue,
    fontWeight: '700',
  },
  quantityBoxLabelCompleted: {
    color: Colors.purple
  },
  quantityBoxTag: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: Colors.gray400,
    marginLeft: 8,
    borderRadius: 999
  },
  emptyListBox: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 48
  },
  emptyListTitle: {
    fontWeight: '700',
    color: Colors.gray300,
    marginTop: 16
  },
  emptyListSubtitle: {
    fontWeight: '400',
    color: Colors.gray300
  },
})