import React from 'react';
import PropTypes from 'prop-types';

import './less/customers.less';

/* Table that holds displays the customer data */
function CustomerTable(props) {
  const { data } = props;

  return (
    <div>
      {
        (data.length > 0)
          ? (
            <table className="customer-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Contact First Name</th>
                  <th>Contact Last Name</th>
                </tr>
              </thead>
              <tbody>
                {
                    data.map(customer => (
                      <tr key={customer.contactLastName + customer.contactFirstName
                        + customer.customerName + Math.random()}
                      >
                        <td key={customer.customerName + Math.random()}>
                          { customer.customerName }
                        </td>
                        <td key={customer.contactFirstName + Math.random()}>
                          { customer.contactFirstName }
                        </td>
                        <td key={customer.contactLastName + Math.random()}>
                          { customer.contactLastName }
                        </td>
                      </tr>
                    ))
                        }
              </tbody>
            </table>
          ) : 'no matching results'
    }
    </div>
  );
}

CustomerTable.defaultProps = {
  data: [
    {

    },
  ],
};

CustomerTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default CustomerTable;
