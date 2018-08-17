const btns = {
  edit: (h, params, vm) => {
    return h('Button', {
      props: {
        type: 'warning',
      },
      style:{
        'margin-left':'10px',
      },
      on: {
        'click': () => {
          vm.$emit('on-edit', params)
        }
      }
    }, '修改'
    )
  },
  detail: (h, params, vm) => {
    return h('Button', {
        props: {
          type: 'info',
        },
        style:{
          'margin-left':'10px',
        },
        on: {
          'click': () => {
            console.log('详情')
            vm.$emit('on-detail', params)
          }
        }
      }, '详情'
    )
  },
  delete: (h, params, vm) => {
    return h('Poptip', {
      props: {
        confirm: true,
        title: '你确定要删除吗?'
      },
      on: {
        'on-ok': () => {
          vm.$emit('on-delete', params)
          vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        }
      }
    }, [
      h('Button', {
        props: {
          type: 'error',
        },
        style:{
          'margin-left':'10px',
        }
      }, '删除'),
    ])
  }
}

export default btns
