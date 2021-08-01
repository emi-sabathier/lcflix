import React, {useState} from 'react';
import DropdownAlert from 'react-native-dropdownalert';
const AlertContext = React.createContext();

// Creating dropdownalert context
function AlertContextProvider(props) {
    const [dropDownAlert, setDropDownAlert] = useState(null);

    return (
        <>
            <AlertContext.Provider value={{ dropDownAlert: dropDownAlert}}>
                {props.children}
            </AlertContext.Provider>
            <DropdownAlert ref={ref => setDropDownAlert(ref)}
                           containerStyle={{backgroundColor: '#4169E1'}}
                           showCancel={true}
                           messageNumOfLines={4}
            />
        </>
    );
}
export {AlertContextProvider, AlertContext};
