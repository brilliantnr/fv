package com.gms.web.msg;

public interface MessageService {

  public void addMessage(Message vo) throws Exception;
  public Message readMessage(String uid, Integer mno) throws Exception;
}
