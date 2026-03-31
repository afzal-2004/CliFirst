import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },

  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow

    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  userId: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },

  info: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },

  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: '10',
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // ✅ black with 0.7 opacity
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow

    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#222',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
    color: '#000',
  },

  UpdateButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelBtn: {
    flex: 1,
    marginRight: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
  },

  updateBtn: {
    flex: 1,
    marginLeft: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },

  cancelText: {
    color: '#333',
    fontWeight: '600',
  },

  updateText: {
    color: '#fff',
    fontWeight: '600',
  },
});
