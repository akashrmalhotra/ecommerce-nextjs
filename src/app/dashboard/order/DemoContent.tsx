"use client";

import React, { useState, useCallback, ChangeEvent } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

interface DataRow {
  id: number;
  orderNo: string;
  customer: string;
  date: string;
  amount: string;
  category: string;
  status: string;
}

const OverviewTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<DataRow[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [timeRange, setTimeRange] = useState<string>('Last Week');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const data: DataRow[] = [
    { id: 1, orderNo: '#87451', customer: 'Esther Howard', date: '02/03/2022', amount: '$200', category: 'Notebook', status: 'Delivered' },
    { id: 2, orderNo: '#87452', customer: 'Wade Warren', date: '02/03/2022', amount: '$220', category: 'Notebook', status: 'Delivered' },
    { id: 3, orderNo: '#87453', customer: 'Jenny Wilson', date: '02/03/2022', amount: '$300', category: 'Notebook', status: 'Delivered' },
    { id: 4, orderNo: '#87454', customer: 'Guy Hawkins', date: '02/03/2022', amount: '$400', category: 'Notebook', status: 'Delivered' },
    { id: 5, orderNo: '#87455', customer: 'Robert Fox', date: '02/03/2022', amount: '$450', category: 'Notebook', status: 'Delivered' },
    { id: 6, orderNo: '#87456', customer: 'Albert Flores', date: '02/03/2022', amount: '$220', category: 'Notebook', status: 'Delivered' },
    { id: 7, orderNo: '#87457', customer: 'Floyd Miles', date: '02/03/2022', amount: '$270', category: 'Notebook', status: 'Delivered' },
    { id: 8, orderNo: '#87458', customer: 'Bessie Cooper', date: '02/03/2022', amount: '$199', category: 'Notebook', status: 'Delivered' },
    { id: 9, orderNo: '#87459', customer: 'Devon Lane', date: '02/03/2022', amount: '$120', category: 'Notebook', status: 'Delivered' },
    { id: 10, orderNo: '#87460', customer: 'Guy Hawkins', date: '02/03/2022', amount: '$122', category: 'Notebook', status: 'Delivered' },
  ];

  const columns: TableColumn<DataRow>[] = [
    {
      name: 'Order No',
      selector: row => row.orderNo,
      sortable: true,
      cell: row => (
        <div className="item-check-area-table-left">
          <p style={{ color: 'var(--color-primary)' }}>{row.orderNo}</p>
        </div>
      ),
      width: '25%',
    },
    {
      name: 'Customer',
      selector: row => row.customer,
      sortable: true,
      cell: row => <p style={{ color: '#2D3B29', fontWeight: 500 }}>{row.customer}</p>,
    },
    {
      name: 'Date',
      selector: row => row.date,
      sortable: true,
      cell: row => (
        <div className="payment d-flex align-items-center">
          <p style={{ color: '#2D3B29', fontWeight: 500 }}>{row.date}</p>
        </div>
      ),
    },
    {
      name: 'Amount',
      selector: row => row.amount,
      sortable: true,
      cell: row => <p style={{ color: '#2D3B29', fontWeight: 500 }}>{row.amount}</p>,
    },
    {
      name: 'Category',
      selector: row => row.category,
      sortable: true,
      cell: row => <p style={{ color: '#2D3B29', fontWeight: 500 }}>{row.category}</p>,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: row => (
        <div className="between-stock-table statrusts">
          <p>{row.status}</p>
          <img src="/assets/images-dashboard/grocery/20.png" alt="" />
          <div className="action-edit-deleate">
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </div>
      ),
    },
  ];

  const handleRowSelected = useCallback((state: { selectedRows: DataRow[] }) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const filteredItems = data.filter(
    item =>
      item.customer.toLowerCase().includes(filterText.toLowerCase()) ||
      item.orderNo.toLowerCase().includes(filterText.toLowerCase()) ||
      item.status.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  const handleRowsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="body-root-inner">
      <div className="transection">
        <div className="title-right-actioin-btn-wrapper-product-list">
          <h3 className="title">Overview</h3>
          <div className="button-wrapper">
            <div className="single-select">
              <select className="nice-select">
                                    <option>Week</option>
                                    <option>Month</option>
                                    <option>Year</option>
                                    <option>6 Month</option>
                                </select>
            </div>
          </div>
        </div>

        <div className="product-top-filter-area-l">
          <div className="left-area-button-fiulter">
            {['All 250', 'New Item 150', 'Disabled 154'].map(filter => (
              <div
                key={filter}
                className={`signle-product-single-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                <span>{filter}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="vendor-list-main-wrapper product-wrapper">
          <div className="card-body table-product-select">
            <div className="table-responsive">
              <div id="example_wrapper" className="dataTables_wrapper no-footer">
                <div className="dataTables_length" id="example_length">
                  <label>
                    Show{' '}
                    <select
                      name="example_length"
                      aria-controls="example"
                      value={rowsPerPage}
                      onChange={handleRowsPerPageChange}
                    >
                      {[5, 10, 15, 20].map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>{' '}
                    entries
                  </label>
                </div>
                <div id="example_filter" className="dataTables_filter">
                  <label>
                    Search:
                    <input
                      type="search"
                      placeholder=""
                      aria-controls="example"
                      value={filterText}
                      onChange={handleFilter}
                    />
                  </label>
                </div>

                <DataTable
                  columns={columns}
                  data={filteredItems}
                  selectableRows
                  onSelectedRowsChange={handleRowSelected}
                  clearSelectedRows={toggleCleared}
                  pagination
                  paginationPerPage={rowsPerPage}
                  paginationRowsPerPageOptions={[5, 10, 15, 20]}
                  paginationComponentOptions={{
                    rowsPerPageText: 'Show',
                    rangeSeparatorText: 'of',
                  }}
                  noDataComponent="No data found"
                  className="table table-hover dataTable no-footer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="left">
          <p>Copyright © 2025 All Right Reserved.</p>
        </div>
        <ul>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OverviewTable;
