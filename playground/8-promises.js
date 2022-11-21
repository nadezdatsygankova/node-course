const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([7, 4, 1])
    // reject('Things went wrong!')
  }, 2000)
})
doWorkPromise
.then((result) => {
  console.log('Success!', result)
})
.catch((error) => {console.log(error)})


const add = (a, b) => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
  if (a < 0 || b < 0) {
  return reject('Numbers must be non-negative')
  }
  resolve(a + b)
  }, 2000)
  })
  }

  add(1,2).then((sum)=>{
    return add(sum,7)
  }).then((sum2)=>{
    return add(sum2,9)
  }).then((sum3)=>{
    console.log(sum3)
  }).catch((e)=>{
    console.log(e)
  })