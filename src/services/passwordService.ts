export default function genaratePass () {
    let password: string = ''
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUWYZX@$#%123456789abcdefghijklmnopqrstuwyzx?!-_=+'
    let passwordLenght = 8

    for(let index = 0; index < 8; index++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        )
    }


    return password
}