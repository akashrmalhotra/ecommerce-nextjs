"use client";
import React, { useMemo } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

type Tx = {
  id: string;
  amount: string;
  method: { image: string; name: string; };
  date: string;
  action: string;
};

const TransactionsTable = () => {
  const data = useMemo<Tx[]>(() =>
    Array.from({ length: 12 }, (_, i) => ({
      id: `#55414${i}`,
      amount: '$241.00',
      method: { image: `/assets/images-dashboard/transection/0${(i % 6) + 1}.jpg`, name: 'Visa' },
      date: '2.06.2024',
      action: 'Details'
    })), []
  );

  const columns = useMemo<TableColumn<Tx>[]>(() => [
    {
      name: 'Transaction ID',
      selector: row => row.id,
      cell: row => <p className="id">{row.id}</p>,
      width: '28%',
    },
    { name: 'Paid', selector: row => row.amount, cell: row => <p>{row.amount}</p> },
    {
      name: 'Method',
      cell: row => (
        <div className="payment d-flex align-items-center">
          <img src={row.method.image} alt="transection" />
          <p>{row.method.name}</p>
        </div>
      ),
    },
    { name: 'Date', selector: row => row.date, cell: row => <p>{row.date}</p> },
    {
      name: 'Action',
      cell: row => (
        <a href="#" className="rts-btn btn-primary">{row.action}</a>
      ),
    },
  ], []);

  const customStyles = useMemo(() => ({
    headCells: { style: { paddingLeft: '8px', paddingRight: '8px' } },
    cells: { style: { paddingLeft: '8px', paddingRight: '8px' } },
  }), []);

  return (
    <div className="body-root-inner">
      <h3 className="title">Transactions</h3>
      <DataTable
        keyField="id"
        columns={columns}
        data={data}
        customStyles={customStyles}
        className="table table-hover transiction-filter"
        highlightOnHover
        responsive
        pagination
        paginationPerPage={7}
        paginationRowsPerPageOptions={[7, 10, 15, 20]}
        noHeader
      />
    </div>
  );
};

export default TransactionsTable;
