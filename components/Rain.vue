<template>
  <div>
    <div
      v-for="(rand, index) in rands"
      :key="index"
      :style="{ left: `${rand.left}vw`, 'animation-delay': `${rand.delay}s` }"
      class="raindrop"
    />
    <div
      v-for="(rand, index) in rands"
      :key="index"
      :style="{ left: `calc(${rand.left}vw)`, 'animation-delay': `${rand.delay + 1.45}s` }"
      class="splash"
    />
  </div>
</template>

<script>
const getRands = () => {
  const rands = []
  for (let i = 0; i < 30; i++) {
    const delay = Math.random() * 3
    let diverse = false
    let newRand = Math.random() * 100
    while (!diverse) {
      diverse = true
      for (const rand in rands) {
        if (Math.abs(rands[rand].left - newRand) < 1) {
          diverse = false
          newRand = Math.random() * 100
        }
      }
    }
    rands.push({ left: newRand, delay })
  }
  return rands
}

export default {
  data: () => {
    return {
      rands: getRands()
    }
  }
}
</script>

<style scoped>
.raindrop {
  position: absolute;
  top: -16px;
  left: 50vw;
  width: 2px;
  height: 16px;
  background-color: #F50057;
  animation: raindrop 1.5s linear infinite;
}
@keyframes raindrop {
  0% { transform: translateY(-16px) }
  50% { transform: translateY(45vh) }
  100% { transform: translateY(90vh) }
}

.splash {
  position: absolute;
  top: calc(90vh - 8px);
  left: 30vw;
  height: 2px;
  width: 2px;
  background-color: transparent;
  animation: splash 1.5s steps(1) infinite;
}
@keyframes splash {
  0%, 13%, 55%, 100% {
    background-color: transparent;
    box-shadow:
      -18px 4px 0 transparent,
      -14px 2px 0 transparent,
      -6px 8px 0 transparent,
      2px 0px 0 transparent,
      4px 0px 0 transparent,
      18px 4px 0 transparent,
      12px 2px 0 transparent,
      6px 8px 0 transparent;
  }
  7% {
    background-color: transparent;
    box-shadow:
      2px -2px 0 #F50057,
      4px 0px 0 #F50057,
      6px 2px 0 #F50057,
      -4px -2px 0 #F50057,
      -6px -0px 0 #F50057;
  }
  14% {
    background-color: #F50057;
    box-shadow:
      4px 2px 0 #F50057,
      6px 2px 0 #F50057,
      8px 2px 0 #F50057,
      -2px 2px 0 #F50057,
      -4px 2px 0 #F50057,
      -6px 2px 0 #F50057;
  }
  21% {
    background-color: #F50057;
    box-shadow:
      0px 2px 0 #F50057,
      2px -2px 0 #F50057,
      -2px 0px 0 #F50057,
      -2px -2px 0 #F50057,
      2px 2px 0 #F50057,
      4px 2px 0 #F50057,
      6px 2px 0 #F50057,
      8px 2px 0 #F50057,
      -2px 2px 0 #F50057,
      -4px 2px 0 #F50057,
      -6px 2px 0 #F50057,
      -8px 2px 0 #F50057;
  }
  28% {
    background-color: transparent;
    box-shadow:
      -2px 0px 0 #F50057,
      -8px -4px 0 #F50057,
      4px 0px 0 #F50057,
      6px -2px 0 #F50057,
      10px -4px 0 #F50057,
      -2px 2px 0 #F50057,
      -4px 2px 0 #F50057,
      -6px 2px 0 #F50057,
      -8px 2px 0 #F50057,
      -10px 4px 0 #F50057,
      -2px 6px 0 #F50057,
      -4px 6px 0 #F50057,
      -6px 6px 0 #F50057,
      -8px 6px 0 #F50057,
      0px 2px 0 #F50057,
      2px 2px 0 #F50057,
      4px 2px 0 #F50057,
      6px 2px 0 #F50057,
      8px 2px 0 #F50057,
      10px 4px 0 #F50057,
      0px 6px 0 #F50057,
      2px 6px 0 #F50057,
      4px 6px 0 #F50057,
      6px 6px 0 #F50057,
      8px 6px 0 #F50057;
  }
  35% {
    background-color: #F50057;
    box-shadow:
      -14px -6px 0 #F50057,
      16px -8px 0 #F50057,
      22px -2px 0 #F50057,
      -2px 0px 0 #F50057,
      -4px 0px 0 #F50057,
      -8px 0px 0 #F50057,
      -10px 6px 0 #F50057,
      -12px 6px 0 #F50057,
      -14px 4px 0 #F50057,
      -12px 2px 0 #F50057,
      -10px 2px 0 #F50057,
      -2px 8px 0 #F50057,
      -4px 8px 0 #F50057,
      -6px 8px 0 #F50057,
      -8px 8px 0 #F50057,
      0px 0px 0 #F50057,
      2px 0px 0 #F50057,
      4px 0px 0 #F50057,
      6px 0px 0 #F50057,
      8px 0px 0 #F50057,
      10px 6px 0 #F50057,
      12px 6px 0 #F50057,
      14px 4px 0 #F50057,
      12px 2px 0 #F50057,
      10px 2px 0 #F50057,
      0px 8px 0 #F50057,
      4px 8px 0 #F50057,
      8px 8px 0 #F50057;
  }
  42% {
    background-color: #F50057;
    box-shadow:
      -4px 0px 0 #F50057,
      -8px 0px 0 #F50057,
      -12px 6px 0 #F50057,
      -18px 4px 0 #F50057,
      -14px 2px 0 #F50057,
      -12px 2px 0 #F50057,
      -2px 8px 0 #F50057,
      -6px 8px 0 #F50057,
      -8px 8px 0 #F50057,
      0px 0px 0 #F50057,
      2px 0px 0 #F50057,
      4px 0px 0 #F50057,
      8px 0px 0 #F50057,
      12px 6px 0 #F50057,
      14px 6px 0 #F50057,
      18px 4px 0 #F50057,
      12px 2px 0 #F50057,
      0px 8px 0 #F50057;
  }
  49% {
    background-color: transparent;
    box-shadow:
      -18px 4px 0 #F50057,
      -14px 2px 0 #F50057,
      -6px 8px 0 #F50057,
      2px 0px 0 #F50057,
      4px 0px 0 #F50057,
      18px 4px 0 #F50057,
      12px 2px 0 #F50057,
      6px 8px 0 #F50057;
  }
}
</style>
