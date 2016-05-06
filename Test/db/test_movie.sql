SELECT distinct M.name
FROM Movie M, ActorPlays Ap
where M.movie_id=Ap.movie_id;