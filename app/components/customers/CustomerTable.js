import React from 'react';
import PropTypes from 'prop-types';

import './less/customers.less';

/* Table that holds displays the customer data */
function CustomerTable(props) {
    const customers = props.data;

    return (
        <div >
            {
                (customers.length > 0) ?
                <table className='customer-table'>
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Contact First Name</th>
                            <th>Contact Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer) => {
                                return (
                                    <tr key={customer.contactLastName+customer.contactFirstName+customer.customerName+Math.random()}>
                                        <td key={customer.customerName+Math.random()}>
                                            { customer.customerName }
                                        </td>
                                        <td key={customer.contactFirstName+Math.random()}>
                                            { customer.contactFirstName }
                                        </td>
                                        <td key={customer.contactLastName+Math.random()}>
                                            { customer.contactLastName }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> : 'no matching results'
            }
        </div>
    );
}

CustomerTable.propTypes = {
    data: PropTypes.array,
}

export default CustomerTable;