<template>
  <div class="container">
    <input 
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="Search for Movies, Series & more" />
    <div class="selects">
      <select
        v-for="filter in filters"        
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'">
          All Years
        </option>        
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            type: 'movie',
            number: 10,
            year: '',
            filters: [
                {
                    name:'type',
                    items: ['movie', 'series', 'episode']
                },
                {
                    name:'number',
                    items: [10, 20, 30]
                },
                {
                    name:'year',
                    items: (() => {
                        const years = []
                        const thisYear = new Date().getFullYear() //2024
                        for (let i = thisYear; i >= 1985; i -= 1){
                            years.push(i)
                        }
                        return years
                    })()
                }
            ]
        }
    }
}
</script>

<!-- > * 의미는 모든 자식 요소들 -->
<style lang="scss" scoped>
.container {
    display: flex;    
    > * {
        margin-right: 10px;
        font-size: 15px;
        &:last-child {
            margin-right: 0;
        }
    }
    .selects {
        display: flex;
        select {
            width: 120px;
            margin-right: 10px;
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>