import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("highscore.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "create table if not exists highscore(id integer primary key not null, score text not null);",
                [],
                () => { resolve() },
                (_, err) => { reject(err) }
            )
        })
    })
    return promise
}

export const insertScore = (score) =>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "insert into highscore (score) VALUES (?);",
                [score],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })
    return promise

}

export const fetchScore = ()=>{
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM highscore",
                [],
                (_, result) => { resolve(result) },
                (_, err) => { reject(err) }
            )
        })
    })
    return promise
}