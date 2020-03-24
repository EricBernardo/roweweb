import React, { useEffect, useState } from 'react';
import api from '~/services/api';

import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

import { Container } from './styles';

export default function Category() {

  const [results, setResults] = useState([])
  const [pagination, setPagination] = useState({
    per_page: 0
  })

  async function loadData(page = 1) {

    const response = await api.get('/product_category', {
      params: { page }
    });

    const data = response.data.data.map(item => {
      return {
        id: item.id,
        title: item.title,
      }
    })

    setResults(data)

    setPagination(response.data.meta)

  }

  useEffect(() => {

    loadData()

  }, [])

  return (
    <Container>
      <h1>CATEGORY</h1>
      <table>
        <thead>
          <tr><td>Título</td></tr>
        </thead>
        <tbody>
          { results.map(item => (
            <tr key={item.id}><td>{item.title}</td></tr>
          )) }
        </tbody>
      </table>
      <Pagination
        hideOnSinglePage={true}
        showTitle={false}
        onChange={loadData}
        pageSize={pagination.per_page}
        disabled={!pagination.total}
        current={pagination.current_page}
        total={pagination.total}
      />
    </Container>
  );
}
