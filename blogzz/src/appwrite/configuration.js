import config from "../config/config";
import { Client, ID, Databases, Query, Storage } from "appwrite";
export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectID);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      console.log("Appwrite error :: createPost :: error", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("Appwrite error :: updatePost :: error", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite error :: deletePost :: error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Appwrite error :: getPost :: error", error);
      return false;
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Appwrite error :: getPosts :: error", error);
      return false;
    }
  }

  //file-upload-&-delete-services
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite error :: uploadFile :: error", error);
      return false;
    }
  }
  async deleteFile(fileID) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketID, fileID);
      return true;
    } catch (error) {
      console.log("Appwrite error :: deleteFile :: error", error);
      return false;
    }
  }
  async getFilePreview(fileID) {
    try {
      return this.bucket.getFilePreview(config.appwriteBucketID, fileID);
    } catch (error) {
      console.log("Appwrite error :: getFilePreview :: error", error);
      return false;
    }
  }
}

const service = new Service();
export default service;
