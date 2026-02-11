import worker from "@/role/worker";
import carrier from "@/role/carrier";

const outmove = {

    run : (creep:Creep,roomname:string) => {

        const targetroom = new RoomPosition(25,25,roomname);   //新建目标房间的移动方向

        if (creep.room.name === roomname){

            if (creep.memory.role === 'worker'){

                worker.run(creep);
            } else if (creep.memory.role === 'carrier'){

                carrier.run(creep);
            }
        } else if (creep.room.name !== roomname){

            if (creep.pos.x === 0){

                creep.move(RIGHT);
            } else if (creep.pos.x === 49){

                creep.move(LEFT);
            } else if (creep.pos.y === 0){
                
                creep.move(TOP);
            } else if (creep.pos.y === 49){

                creep.move(BOTTOM);
            } else {

                creep.moveTo(targetroom);
            }
            
        }
    }
};

export default outmove;