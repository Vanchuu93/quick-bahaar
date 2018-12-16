module.exports = function QuickBahaar(dispatch) {
	let zone = null;
	let loc = {x: -94493, y: 99601, z: 4363};
	let entranceLoc = {x: -103510, y: 98460, z: 3547};

	dispatch.hook('S_LOAD_TOPO', 3, (event) => {
		zone = event.zone;
	});
	
	dispatch.hook('S_SPAWN_ME', 3, {order: 200}, (event) => {
		if(zone == 9044 && Math.abs(event.loc.x - entranceLoc.x) <= 10 && Math.abs(event.loc.y - entranceLoc.y) <= 10 && Math.abs(event.loc.z - entranceLoc.z) <= 10) {
			event.loc = loc;
    		return true;
		}
	});
}
