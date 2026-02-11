import ct from '@/constants'


const sc = {

    spawn : (spawnname:string,type:CreepType,tag:CreepTag,target:string = null): void => {

        if (Game.spawns[spawnname]){
        
                
            const spawn = Game.spawns[spawnname];
            const freecapacity = spawn.store.getFreeCapacity();
                
            
                                  
            const spawning = spawn.spawning;
        
            if (spawning === null && (freecapacity ?? 0) === 0){  
                    
                const newname : string= 'creep' + Game.time;                                        
        
                spawn.spawnCreep(ct.creep[type],newname,{ memory : { role : type,tag : tag,target : target}});
        
            } else if (spawning !== null){
        
                console.log('正在孵化' + spawning.name + ',还需' + spawning.remainingTime + 'ticks');
        
            } else if (spawning === null && (freecapacity ?? 0) > 0){
        
                console.log('还要' + freecapacity + '能量才能开始孵化');    
            }
                
                    
                          
                   
        } else {
        
            return;
            
        }    
    }
};

export default sc;