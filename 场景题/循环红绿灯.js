
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}
//回调实现
const task = (timer, light, callback) => {
    setTimeout(() => {
        if (light === 'red') {
            red()
        }
        else if (light === 'green') {
            green()
        }
        else if (light === 'yellow') {
            yellow()
        }
        callback()
    }, timer)
}
const step = () => {
    task(3000, 'red', () => {
        task(2000, 'green', () => {
            task(1000, 'yellow', step)
        })
    })
}
step()



//promise 实现
const task2 = (timer, light) => {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (light === 'red') {
                red()
            }else if (light === 'green') {
                green()
            }else{
                yellow()
            }
            resolve()
        },timer)
    })
}
const step2 = () => {
    task2(3000, 'red').then(() => {
        return task2(2000, 'green')
    }).then(() => {
        return task2(1000, 'yellow')
    }).then(() => {
        step2()
    })
}

//使用 async 实现
const taskRunner =  async () => {
    await task(3000, 'red')
    await task(2000, 'green')
    await task(2100, 'yellow')
    taskRunner()
}
taskRunner()