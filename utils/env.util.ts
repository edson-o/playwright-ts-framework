const env = process.env.NODE_ENV || 'qa';

const urls: any = {
    qa: process.env.BASEQA,
    dev: process.env.BASEDEV
}

export const Env = {
    baseurls: urls[env],
    user: process.env.USERTEST,
    pass: process.env.PASSTEST
}