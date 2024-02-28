package com.team5.projrental.board.comment.model;


import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BoardCommentPatchDto {
    private long loginIuser;
    private int iboardComment;
    private String comment;
}
