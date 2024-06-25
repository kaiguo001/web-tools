# web-utils-plus
# Datejs
```
import { Datejs } from web-utils-plus
const date = new Datejs('2024-08-11').format('YYYY-MM-DD')
```
|   字符   |   含义   |   例子   |
| :-: | :-: | :-: |
| YYYY | 年份 | 2024 |
| MM | 月份 | 08 |
| DD | 日期 | 11 |
| HH | 小时 | 10 |
| mm | 分钟 | 32 |
| ss | 秒钟 | 30 |
| dd | 星期 | 星期日 |

# debounce/throttle
```
<template>
    <div>
        <div>{{ nums }}</div>
        <button @click="handlerClick">click</button>
    </div>
</template>
<script setup>
import { debounce, throttle } from 'web-utils-plus'

import { ref } from 'vue'
const nums = ref(0)
function handlerClick() {
    debounce(()=> {
        nums.value ++
    }, 1000)
    throttle(() => {
        nums.value ++
    },1000)
}
</script>
```