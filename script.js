const gradientBox = document.querySelector(".gradient-box")
const selectBox = document.querySelector('.select-box select')
const colorInputs = document.querySelectorAll('.colors input')
const textarea = document.querySelector('textarea')
const refreshbtn = document.querySelector('.refresh')
const copyBtn = document.querySelector('.copy')


const generateRandomColor = () => {
    const randomRex = Math.floor(Math.random() * 0xffffff).toString(16)
    return `#${randomRex}`
}


const generateGradient = (isRandom) => {

    if(isRandom){
        colorInputs[0].value = generateRandomColor()
        colorInputs[1].value = generateRandomColor()
    }

    const gradient = `linear-gradient(${selectBox.value}, ${colorInputs[0].value},${colorInputs[1].value})`
    gradientBox.style.background = gradient
    textarea.value = `background: ${gradient}`
}


const copyCode = () => {
    navigator.clipboard.writeText(textarea.value)
    copyBtn.innerHTML = 'Code Copied'
    setTimeout(() => copyBtn.innerHTML = 'Copy Code', 1600)
}



colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false))
})

selectBox.addEventListener("change", () => generateGradient(false))

refreshbtn.addEventListener('click', () => generateGradient(true))

copyBtn.addEventListener('click', copyCode)