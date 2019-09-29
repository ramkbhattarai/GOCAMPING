json.extract! site, :id, :title, :body, :host_id, :cost, :lat, :log,  :campfire, :toilet, :shower_room, :guest_num, :tent, :parking, :biking, :pet_allow, :hiking, :wildlife, :rafting, :spots, :reviews

json.set! "user" do 
   json.partial! '/api/users/user', user: site.host
end

if site.photos.attached? 
   json.photoUrls site.photos.map{ |photo| url_for(photo)}
end