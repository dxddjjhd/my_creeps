import sc from './spawncontroller'

const qc = {

    run : (type:CreepType,creepnumber: number,tag:CreepTag,targetroom:string = null) => {
    
        if (
            Object.values(Game.creeps).filter((creep) => {
                return creep.memory.role === type && creep.memory.tag === tag && creep.memory.target === targetroom
            }).length < creepnumber
        ){
                       
            sc.spawn('Spawn1',type,tag,targetroom);
        }
    }
};

export default qc;