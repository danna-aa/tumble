@follows.each do |follow|
  json.set! follow.creator_id do
    json.partial! 'follow', follow: follow
  end
end