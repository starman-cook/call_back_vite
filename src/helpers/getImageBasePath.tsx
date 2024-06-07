export const getImageBasePath = () => {
    if (import.meta.env.VITE_APP_IS_DEV) {
        return ''
    } else {
        return 'https://callbackvite.netlify.app/'
    }
}