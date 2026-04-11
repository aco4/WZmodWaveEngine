namespace("spawn_")

function spawn_eventMissionTimeout()
{
	spawn_tick();
}

function spawn_tick()
{
	const [x, y] = SPAWN_POINTS[syncRandom(SPAWN_POINTS.length)];
	const template = TEMPLATES[syncRandom(TEMPLATES.length)];
	Template.spawn(Template.fromString(template), ENEMY, x, y);

	const delay = 50000 * Math.E**(-0.000001*gameTime);
	queue("spawn_tick", delay);
}
