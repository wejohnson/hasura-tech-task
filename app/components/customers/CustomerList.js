import React, { useEffect, useState } from 'react';
import CustomerTable from './CustomerTable';
import { isEqual } from 'lodash';
import { httpCall } from '../common/http';

/* Customer table plus filter controls */
function CustomerList(props) {
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await httpCall('/customers', 'GET');
            if (!isEqual(result.data,customerData)) {
                setCustomerData(result.data);
            }
        }

        fetchData();
    },[customerData]);

    return (
        <div>
            <div className='customer-table'>
                <CustomerTable data={ customerData } />
            </div>
            
        </div>
    );
}

export default CustomerList;