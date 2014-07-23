'use strict'

function createUser(userId, fullName, city, latency, artistInfluence, genres, instruments, skillLevel) {
	this.userId          = userId
	this.fullName        = fullName
	this.city            = city
	this.latency         = latency
	this.artistInfluence = artistInfluence
	this.genres          = genres
	this.instruments     = instruments
	this.skillLevel      = skillLevel  //Values from 1 to 3 ==> 1: Beginner 2: Intermediate 3: Expert

}

module.exports = createUser