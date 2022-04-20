import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, Alert } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Provider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>
      <Button style={{marginTop: 30}} onPress={showModal}>
        Show
      </Button>
      <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: 'Football', value: 'football' },
            { label: 'Baseball', value: 'baseball' },
            { label: 'Hockey', value: 'hockey' },
          ]}
          placeholder={{ label: 'Selecionar colaborador', value: null }}
        />
    </Provider>
    
  );
};

export default MyComponent;