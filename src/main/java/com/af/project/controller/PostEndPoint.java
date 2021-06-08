package com.af.project.controller;

import com.af.project.api.PostApi;
import com.af.project.domain.Post;
import com.af.project.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/posts")
public class PostEndPoint {
    private PostApi postApi;

    @Autowired
    public PostEndPoint(PostApi postApi){
        this.postApi = postApi;
    }
    @GetMapping
    public List<Post> getPosts(){
        return postApi.getAllPosts();
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.addPost(post);
    }
    @DeleteMapping(value = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletePost(@PathVariable String id){
         postApi.removePost(id);
    }
    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id, @RequestBody PostDto postDto){
        Post post = new Post();
        post.setId(id);
        post.setName(postDto.getName());
        post.setDescription(postDto.getDescription());
        return postApi.replacePost(post);
    }

}
